package com.portfolio.repository

import com.portfolio.model.Skill
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface SkillRepository :
    MongoRepository<Skill, UUID> {

    fun findAllByOrderByDisplayOrderAsc(): List<Skill>

    fun findAllByCategoryOrderByDisplayOrderAsc(
        category: String
    ): List<Skill>
}