package com.portfolio.repository

import com.portfolio.model.Experience
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ExperienceRepository :
    MongoRepository<Experience, UUID> {

    fun findAllByOrderByDisplayOrderAsc(): List<Experience>
}