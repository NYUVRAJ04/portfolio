package com.portfolio.dto.response

import com.portfolio.model.Education
import java.time.Instant
import java.time.LocalDate
import java.util.UUID

data class EducationResponse(
    val id: UUID,
    val institution: String,
    val degree: String,
    val field: String,
    val startDate: Instant,
    val endDate: Instant?,
    val grade: String?,
    val description: String?,
    val displayOrder: Int
) {
    companion object {

        fun from(education: Education): EducationResponse {
            return EducationResponse(
                id = education.id,
                institution = education.institution,
                degree = education.degree,
                field = education.field,
                startDate = education.startDate,
                endDate = education.endDate,
                grade = education.grade,
                description = education.description,
                displayOrder = education.displayOrder
            )
        }
    }
}