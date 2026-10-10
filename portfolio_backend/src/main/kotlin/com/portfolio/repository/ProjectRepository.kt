package com.portfolio.repository

import com.portfolio.model.Project
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ProjectRepository :
    MongoRepository<Project, UUID> {

    fun findAllByOrderByDisplayOrderAsc(): List<Project>
}