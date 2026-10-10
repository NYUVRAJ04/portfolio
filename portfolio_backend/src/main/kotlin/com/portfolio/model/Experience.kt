package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate
import java.util.UUID

@Document(collection = "experiences")
data class Experience(
    @Id
    val id: UUID = UUID.randomUUID(),
    val company: String,
    val role: String,
    val employmentType: String,
    val startDate: LocalDate,
    val endDate: LocalDate? = null,
    val location: String? = null,
    val description: String? = null,
    val responsibilities: List<String> = emptyList(),
    val achievements: List<String> = emptyList(),
    val technologies: List<String> = emptyList(),
    val displayOrder: Int = 0
)