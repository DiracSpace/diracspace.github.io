const video = document.getElementById("video")

// run calls in asynchronous
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models')
])

function AI() {
    navigator.getUserMedia(
        {
            video: {},
        },
        stream => video.srcObject = stream,
        err => console.error(err)
    );
}

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const display = {
        width: video.width,
        height: video.height
    }
    faceapi.matchDimensions(canvas, display)
    setInterval(async () => {
        const detection = await faceapi.detectAllFaces(video,
            new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detection, display)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 100)
})

AI()

/*
face-api.js:552 Uncaught (in promise) Error: Box.constructor - expected box to be IBoundingBox | IRect, instead have {"left":0.15384615384615385,"top":null,"right":0.15384615384615385,"bottom":null}
    at BoundingBox.Box (face-api.js:552)
    at new BoundingBox (face-api.js:742)
    at TinyFaceDetector.<anonymous> (face-api.js:4748)
    at step (face-api.js:402)
    at Object.next (face-api.js:383)
    at fulfilled (face-api.js:373)

*/