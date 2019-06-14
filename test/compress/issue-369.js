argument_reassign_by_define_function: {
    options = {
        collapse_vars : true,
        unused        : true,
    }
    input: {
        var printTest = function (a) {
            function a() {
                console.log('Value after override');
            }
            return a;
        }('Value before override');

        printTest();
    }
    expect: {
        var printTest = function () {
            console.log('Value after override');
        };
        printTest();
    }
    expect_stdout: "Value after override"
}
