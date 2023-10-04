// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//This contract is only intended for testing purposes

contract Greeting {
    string private greeting;

    /**
     * @dev Constructor is used to set the initial greeting for the contract
     * @param _greeting: The greeting to be associated to the greeting variable
     */
    constructor(string memory _greeting) payable{
        greeting = _greeting;
    }

    /**
     * @dev setGreeting() updates the stored greeting in the contract
     * @param _greeting The new greeting to replace the existing one
     */
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    /**
     * @dev getGreeting() retrieves the currently stored greeting in the contract
     * @return The greeting associated with the contract
     */
    function getGreeting() public view returns(string memory){
        return greeting;
    }
}