//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Ownable {
    address public owner;
    string password;

    function Owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: You are not the Admin");
        _;
    }
}

contract Attendance is Ownable {
    struct Student {
        uint256 studentId;
        address studentAddress;
        string fullName;
        string program;
        string year;
        string avatar;
    }

    Student public student;
    Student[] public studentList;
    mapping(address => Student) public studentAddress;

    event studentCreationEvent(
        uint256 studentId,
        string fullName,
        string program,
        string year
    );

    //    function to create system users
    function createStudent(
        uint256 _studentId,
        string memory _fullName,
        string memory _program,
        string memory _year,
        string memory _avatar
    ) public payable returns (bool, string memory) {
        if (student.studentId != _studentId) {
            student.studentId = _studentId;
            student.fullName = _fullName;
            student.program = _program;
            student.year = _year;
            student.avatar = _avatar;

            studentList.push(student);
            emit studentCreationEvent(_studentId, _fullName, _program, _year);

            return (true, "Student added Successfully!");
        } else {
            return (false, "Student already exists!");
        }
    }

    // fetch all students
    function getAllStudents() public view returns (Student[] memory) {
        return studentList;
    }

    // Get particular student
    function getOneStudent(uint256 _studentId)
        public
        view
        returns (
            uint256,
            address,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            studentList[_studentId].studentId,
            studentList[_studentId].studentAddress,
            studentList[_studentId].fullName,
            studentList[_studentId].program,
            studentList[_studentId].year,
            studentList[_studentId].avatar
        );
    }

     // Student login
    function loginStudent(uint256 _studentId, string memory _program ) public view returns(bool, string memory){
        
            if(studentList[_studentId].studentId == _studentId){
                if(keccak256(abi.encodePacked(studentList[_studentId].program)) == keccak256(abi.encodePacked(_program))){
                    
                    return(true,"login successfully");
                }else{
                    return(false,"incorrect password");
                }
            }else{
                return(false,"id does not exists");
            }
        }

    // Teacher Structure
    struct Teacher {
        uint256 tid;
        address teacherAddress;
        string name;
        string courseCode;
        string department;
        string avatar;
    }

    Teacher public teacher;
    Teacher[] public teacherList;
    mapping(address => Teacher) public teacherAddress;

    event teacherCreationEvent(
        string name,
        string courseCode,
        string department
    );

    //    function to create teacher
    function createTeacher(
        uint256 _tid,
        string memory _name,
        string memory _courseCode,
        string memory _department,
        string memory _avatar
    ) public returns (bool, string memory) {
        if (teacher.tid != _tid) {
            teacher.tid = _tid;
            teacher.name = _name;
            teacher.courseCode = _courseCode;
            teacher.department = _department;
            teacher.avatar = _avatar;

            teacherList.push(teacher);
            emit teacherCreationEvent(_name, _courseCode, _department);

            return (true, "Teacher added Successfully!");
        } else {
            return (false, "Teacher already exists!");
        }
    }

    // fetch all teachers
    function getAllTeachers() public view returns (Teacher[] memory) {
        return teacherList;
    }

    // Course Structure
    struct Course {
        string courseCode;
        string name;
        uint256 tid;
        uint256[] students;
        string lng;
        string lat;
        string lectureHall;
        uint256 startTime;
        uint256 endTime;
    }
    Course public course;
    Course[] public courseList;
    mapping(address => Course) public courseAddress;

    //  Event for course creation
    event courseCreationEvent(
        string name,
        string courseCode,
        string lectureHall,
        uint256 startTime,
        uint256 endTime
    );

    // create course function
    function createCourse(
        string memory _courseCode,
        string memory _name,
        uint256 _tid,
        string memory _lng,
        string memory _lat,
        string memory _lectureHall,
        uint256 _startTime,
        uint256 _endTime
    ) public returns (bool, string memory) {
        if (
            keccak256(abi.encodePacked(course.courseCode)) !=
            keccak256(abi.encodePacked(_courseCode))
        ) {
            course.courseCode = _courseCode;
            course.name = _name;
            course.tid = _tid;
            course.lng = _lng;
            course.lat = _lat;
            course.lectureHall = _lectureHall;
            course.startTime = _startTime;
            course.endTime = _endTime;

            courseList.push(course);
            emit courseCreationEvent(
                _name,
                _courseCode,
                _lectureHall,
                _startTime,
                _endTime
            );

            return (true, "Created Successfully");
        } else {
            return (false, "Course exists on the blockchain");
        }
    }
}
