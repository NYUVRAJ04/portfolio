package com.portfolio.model

import com.portfolio.utils.enums.AchievementCategory
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document(collection = "achievements")
data class Achievement(
    @Id
    val id: UUID = UUID.randomUUID(),
    val slug: String,
    val title: String,
    val description: String,
    val category: AchievementCategory,
    val icon: String? = null,
    val xp: Int,
    val unlocked: Boolean = true,
    val displayOrder: Int = 0
)