package com.spring.simplespringbootcrud.repository;

import com.spring.simplespringbootcrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee,Long> {


}
