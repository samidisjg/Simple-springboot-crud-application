package com.spring.simplespringbootcrud.controller;

import com.spring.simplespringbootcrud.exception.ResourceNotFoundException;
import com.spring.simplespringbootcrud.model.Employee;
import com.spring.simplespringbootcrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }


    //create employee rest api
    @PostMapping("employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //build get employee by id REST API
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById( @PathVariable long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
                return ResponseEntity.ok(employee);

    }

}
