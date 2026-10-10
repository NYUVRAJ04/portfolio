package com.portfolio.dto.response

import com.portfolio.model.Skill
import java.util.UUID

data class SkillResponse(
    val id: UUID,
    val name: String,
    val category: String,
    val level: Int,
    val experienceYears: Double,
    val technologies: List<String>,
    val description: String?,
    val displayOrder: Int
) {
    companion object {

        fun from(skill: Skill): SkillResponse {
            return SkillResponse(
                id = skill.id,
                name = skill.name,
                category = skill.category,
                level = skill.level,
                experienceYears = skill.experienceYears,
                technologies = skill.technologies,
                description = skill.description,
                displayOrder = skill.displayOrder
            )
        }
    }
}