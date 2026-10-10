package com.portfolio.dto.response

import com.portfolio.model.Experience
import java.time.LocalDate
import java.util.UUID

data class ExperienceResponse(
    val id: UUID,
    val company: String,
    val role: String,
    val employmentType: String,
    val startDate: LocalDate,
    val endDate: LocalDate?,
    val location: String?,
    val description: String?,
    val responsibilities: List<String>,
    val achievements: List<String>,
    val technologies: List<String>,
    val displayOrder: Int
) {
    companion object {

        fun from(experience: Experience): ExperienceResponse {
            return ExperienceResponse(
                id = experience.id,
                company = experience.company,
                role = experience.role,
                employmentType = experience.employmentType,
                startDate = experience.startDate,
                endDate = experience.endDate,
                location = experience.location,
                description = experience.description,
                responsibilities = experience.responsibilities,
                achievements = experience.achievements,
                technologies = experience.technologies,
                displayOrder = experience.displayOrder
            )
        }
    }
}