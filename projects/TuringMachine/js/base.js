document.addEventListener("DOMContentLoaded", (e) => {
    // Steps
    var steps = {};

    // s1: 
    steps['s1:1'] = { state: 's2', value: 'X', move: 'right' };
    steps['s1:*'] = { state: 's8', value: '*', move: 'right' };

    // s2: move to right until * and goto s3 
    steps['s2:1'] = { state: 's2', value: '1', move: 'right' };
    steps['s2:*'] = { state: 's3', value: '*', move: 'right' };

    // s3: replace 1 with Y and goto s4
    steps['s3:1'] = { state: 's4', value: 'Y', move: 'right' };
    steps['s3:='] = { state: 's6', value: '=', move: 'left' };

    // s4: write 1 into empty place and goto s5
    steps['s4:1'] = { state: 's4', value: '1', move: 'right' };
    steps['s4:='] = { state: 's4', value: '=', move: 'right' };
    steps['s4:'] = { state: 's5', value: '1', move: 'left' };

    // s4: seek left until Y
    steps['s5:1'] = { state: 's5', value: '1', move: 'left' };
    steps['s5:='] = { state: 's5', value: '=', move: 'left' };
    steps['s5:Y'] = { state: 's3', value: 'Y', move: 'right' };

    // s6: cleanup Y and seek X
    steps['s6:Y'] = { state: 's6', value: '1', move: 'left' };
    steps['s6:*'] = { state: 's6', value: '*', move: 'left' };
    steps['s6:1'] = { state: 's6', value: '1', move: 'left' };
    steps['s6:X'] = { state: 's1', value: 'X', move: 'right' };

    // handle 0
    steps['s1:0'] = { state: 's7', value: '0', move: 'right' };
    steps['s3:0'] = { state: 's7', value: '0', move: 'right' };
    steps['s7:*'] = { state: 's7', value: '*', move: 'right' };
    steps['s7:1'] = { state: 's7', value: '1', move: 'right' };
    steps['s7:0'] = { state: 's7', value: '0', move: 'right' };
    steps['s7:='] = { state: 's7', value: '=', move: 'right' };
    steps['s7:'] = { state: 's8', value: '0', move: 'right' };

    // Turning machine
    var turing = new Turing(steps, 's1', 's8');
    turing.tape = ['1', '1', '1', '*', '1', '1', '='];
    turing.calc = '3 * 2 =';
    turing.reset();

    $('#run').click(function () {
        turing.run();
    });

    $('#step').click(function () {
        turing.step();
    });

    $('#reset').click(function () {
        turing.reset();
    });

    $('#calc').click(function () {
        var calc = prompt('Please type in new calculation (e.g. 3 * 2):');
        if (calc) {
            var match = calc.match(/([0-9]+)[ ]*\*[ ]*([0-9]+)/i);
            if (match) {
                var first = parseInt(match[1]), second = parseInt(match[2]);
                var tape = [];
                var i = 0;
                if (0 == first) {
                    tape[i++] = '0';
                } else {
                    for (; i < first; i++) {
                        tape[i] = '1';
                    }
                }
                tape[i++] = '*';
                if (0 == second) {
                    tape[i++] = '0';
                } else {
                    for (var end = second + i; i < end; i++) {
                        tape[i] = '1';
                    }
                }
                tape[i++] = '=';
                turing.tape = tape;
                turing.calc = first + ' * ' + second + ' =';
                turing.reset();
            } else {
                alert('Sorry, invalid input!');
            }
        }
    });
});