package com.portfolio.repository

import com.portfolio.model.Achievement
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface AchievementRepository :
    MongoRepository<Achievement, UUID> {

    fun findAllByOrderByDisplayOrderAsc(): List<Achievement>
}