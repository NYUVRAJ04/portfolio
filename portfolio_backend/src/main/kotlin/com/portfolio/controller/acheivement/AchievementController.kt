package com.portfolio.controller.acheivement

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.AchievementResponse
import com.portfolio.service.achievement.AchievementService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(ApiPaths.ACHIEVEMENTS)
class AchievementController(
    private val achievementService: AchievementService
) {

    @GetMapping
    fun getAchievements(): List<AchievementResponse> {
        return achievementService.getAchievements()
    }
}
