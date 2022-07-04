//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7; 

contract Attendance {

    address public owner;
    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
    constructor (){
        owner = msg.sender;
    }

    struct Student{
        address studentAddress;
        uint sID;
        string fullName;
        string email;
        string password;
        string program;
    }

    Student public student;
    Student[] studentList;
    mapping(address => Student) public findStudent;

    event studentCreatedEvent(
        address studentAddress,
        uint sID,
        string email,
        string fullName,
        string program
    );

    function enrollStudent(address _studentAddress, uint _sID, string memory _fullName, string memory _email, string memory _password, string memory _program) public returns(bool, string memory){
        
        if(student.sID != _sID && student.studentAddress != _studentAddress){
            student.studentAddress = _studentAddress;
            student.sID = _sID;
            student.fullName = _fullName;
            student.email = _email;
            student.password = _password;
            student.program = _program;

            studentList.push(student);
            emit studentCreatedEvent(_studentAddress, _sID, _email, _fullName, _program);
            return(true, "You successfully enrolled");
        } else {
            return(false, "You are not permitted to do this");
        }
    }

    function getAllStudents() public view returns(Student[] memory){
        return studentList;
    }

    // Sigin student
    function signInStudent() public view returns(bool, string memory){
        if(student.studentAddress == msg.sender){
            //  && studentList[_sID].studentAddress == msg.sender studentList[_sID].sID == _sID
                // if(keccak256(abi.encodePacked(studentList[_sID].password)) == keccak256(abi.encodePacked(_password))){
                    return(true,"login successfully");
                // }else{
                //     return(false,"incorrect password");
                // }
            }
            
                return(false,"Account does not exists, Please enroll");
        
    }


    // Teacher Structure
    struct Lecturer{
        address lecturerAddress;
        uint lID;
        string email;
        string fullName;
        string department;
    }

    Lecturer public lecturer;
    mapping(address => Lecturer) public findLecturer;
    Lecturer[] lecturerList;

    event lecturerCreatedEvent(
        uint lID,
        string email,
        string fullName,
        string department
    );

    function createLecturer(uint _lID, string memory _email, string memory _fullName, string memory _department) onlyOwner public returns(bool, string memory){
        if(lecturer.lID != _lID && keccak256(abi.encodePacked(lecturer.email)) != keccak256(abi.encodePacked(_email))){
           
            lecturer.lID = _lID;
            lecturer.email = _email;
            lecturer.fullName = _fullName;
            lecturer.department = _department;

            lecturerList.push(lecturer);

            emit lecturerCreatedEvent(_lID, _email, _fullName, _department);
            return(true, "Lecturer enrolled Successfully!");
        }
        return(false, "Lecturer with ID already exist");
    }

    //login teacher
    function loginLecturer(uint _lID, string memory _email) public view returns(bool, string memory){
        if(lecturer.lID == _lID && keccak256(abi.encodePacked(lecturer.email)) == keccak256(abi.encodePacked(_email))){
            return(true, "You are welcome back");
        }
        return(false, "Sorry, user does not exist!");
    }

    function getAllLecturers() public view returns(Lecturer[] memory){
        return lecturerList;
    }


    // Course
    struct Course{
        string code;
        string title;
        uint lID;
        string lecName;
        string day;
        uint startTime;
        uint endTime;
    }

    Course[] courseList;
    Course public courses;

    event courseCreatedEvent(
        string code,
        string title,
        uint lID,
        string lecName,
        string day,
        uint startTime,
        uint endTime
    );

    //create course
    function createCourse(string memory _code, string memory _title, uint _lID, string memory _lecName, string memory _day, uint _startTime, uint _endTime) onlyOwner public returns(bool, string memory){
        if(keccak256(abi.encodePacked(courses.code)) != keccak256(abi.encodePacked(_code))){
            courses.code = _code;
            courses.title = _title;
            courses.lID = _lID;
            courses.lecName = _lecName;
            courses.day = _day;
            courses.startTime = _startTime;
            courses.endTime = _endTime;

            courseList.push(courses);
            emit courseCreatedEvent(_code, _title, _lID, _lecName, _day, _startTime, _endTime);
            return(true, "Course created successfully!!");
        }
        return(false, "Sorry, course already exist!");
    }

    function getAllCourses() public view returns(Course[] memory){
        return courseList;
    }

}