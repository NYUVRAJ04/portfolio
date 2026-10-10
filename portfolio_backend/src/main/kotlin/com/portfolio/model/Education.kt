package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant
import java.util.UUID

@Document(collection = "education")
data class Education(
    @Id
    val id: UUID = UUID.randomUUID(),
    val institution: String,
    val degree: String,
    val field: String,
    val startDate: Instant,
    val endDate: Instant? = null,
    val grade: String? = null,
    val description: String? = null,
    val displayOrder: Int = 0
)