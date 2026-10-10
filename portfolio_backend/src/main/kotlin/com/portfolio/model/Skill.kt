package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document(collection = "skills")
data class Skill(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String,
    val category: String,
    val level: Int,
    val experienceYears: Double,
    val technologies: List<String> = emptyList(),
    val description: String? = null,
    val displayOrder: Int = 0
)