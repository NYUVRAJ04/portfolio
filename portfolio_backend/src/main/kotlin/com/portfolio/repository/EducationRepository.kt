package com.portfolio.repository

import com.portfolio.model.Education
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface EducationRepository :
    MongoRepository<Education, UUID> {

    fun findAllByOrderByDisplayOrderAsc(): List<Education>
}