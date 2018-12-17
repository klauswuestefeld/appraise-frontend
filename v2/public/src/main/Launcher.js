// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

Percy.start = function () {
"use strict";

    // Percy can only be started once
    delete Percy.start;
    delete Percy.registerStart;

    Percy.initAuth();

};

Percy.registerStart = function() {
    window.addEventListener("load", function() {
        Percy.start();
    });
};

Percy.VERSION = "0.1";

Percy.registerStart();
