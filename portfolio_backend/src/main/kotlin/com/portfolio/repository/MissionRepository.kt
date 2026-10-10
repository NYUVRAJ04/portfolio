package com.portfolio.repository

import com.portfolio.model.Mission
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface MissionRepository :
    MongoRepository<Mission, UUID> {

    fun findAllByExperienceIdOrderByDisplayOrderAsc(
        experienceId: UUID
    ): List<Mission>
}