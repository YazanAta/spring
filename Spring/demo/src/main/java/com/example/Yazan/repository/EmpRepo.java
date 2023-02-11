package com.example.Yazan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Yazan.model.entity.Employees;

public interface EmpRepo extends JpaRepository<Employees, Integer>{ 

}
