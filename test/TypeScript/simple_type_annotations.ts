//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Copyright (c) ChakraCore Project Contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Simple annotation
{
    const a: string = 'test';
}

// Uninon types
{
    const a: string | boolean | null | void = 'test';
}

// Intersection types
{
    let a: string & boolean & null & void;
}

// Object types
{
    const a: { b: string } = { b: 'test' };
}
{
    const a: { b: string; c: any } = { b: 'test', c: 1 };
}
{
    const a: { b: string, c: any } = { b: 'test', c: 1 };
}
{
    const a: {
        b: string
        c: any
    } = { b: 'test', c: 1 };
}
{
    const a: {
        b: string
        c: any
    } = { b: 'test', c: 1 };
}

// Function types
{
    const a: () => void = () => { };
}
{
    const a: (b: string) => void = (b) => { };
}
{
    const a: (b: string, c: any) => void = (b, c) => { };
}

// Ambient declarations
// declare let $1: any;

/// --------- ///

// Variables
{
    var a: string;
}
{
    let a: string;
}
{
    const a: string = 'test';
}

// Function
function f1(): void { }
function f2(b: string): void { }
function f3(b: string, c: string): void { }

// Getter / setter
class TestClass {
    constructor(value: string) {
        console.log(value);
    }

    get value(): string {
        return 'test';
    }

    set value(value: string) {
        console.log(value);
    }
}

// Stuff
{
    const a: [] = [];
}
{
    const a: {}[] = [];
}
{
    const a: ({}[]) = [];
}

// Lambdas
{
    const a = () => { };
}
{
    const a = (): void => { };
}
{
    const a = (b: string): void => { };
}
{
    const a = (b: string, c: string): void => { };
}