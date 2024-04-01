/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import inheritedPropertySymbols = require( './index' );


// TESTS //

// The function returns an array of symbols...
{
	inheritedPropertySymbols( { 'beep': 'boop', 'foo': 3.14 } ); // $ExpectType symbol[]
	inheritedPropertySymbols( { 'beep': 'boop', 'foo': 3.14 }, 1 ); // $ExpectType symbol[]
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	inheritedPropertySymbols( [], 'abc' ); // $ExpectError
	inheritedPropertySymbols( [], false ); // $ExpectError
	inheritedPropertySymbols( [], true ); // $ExpectError
	inheritedPropertySymbols( [], [] ); // $ExpectError
	inheritedPropertySymbols( [], {} ); // $ExpectError
	inheritedPropertySymbols( [], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	inheritedPropertySymbols(); // $ExpectError
	inheritedPropertySymbols( [], 2, 2 ); // $ExpectError
}
