package com.portfolio.service.achievement

import com.portfolio.dto.response.AchievementResponse
import com.portfolio.repository.AchievementRepository
import org.springframework.stereotype.Service

@Service
class AchievementService(
    private val achievementRepository: AchievementRepository
) {

    fun getAchievements(): List<AchievementResponse> {
        return achievementRepository
            .findAllByOrderByDisplayOrderAsc()
            .map { AchievementResponse.from(it) }
    }
}