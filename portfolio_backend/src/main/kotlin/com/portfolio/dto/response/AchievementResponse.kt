package com.portfolio.dto.response

import com.portfolio.model.Achievement
import com.portfolio.utils.enums.AchievementCategory
import java.util.UUID

data class AchievementResponse(
    val id: UUID,
    val title: String,
    val description: String,
    val category: AchievementCategory,
    val icon: String?,
    val xp: Int,
    val unlocked: Boolean,
    val displayOrder: Int
) {
    companion object {

        fun from(achievement: Achievement): AchievementResponse {
            return AchievementResponse(
                id = achievement.id,
                title = achievement.title,
                description = achievement.description,
                category = achievement.category,
                icon = achievement.icon,
                xp = achievement.xp,
                unlocked = achievement.unlocked,
                displayOrder = achievement.displayOrder
            )
        }
    }
}