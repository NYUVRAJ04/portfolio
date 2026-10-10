package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document(collection = "missions")
data class Mission(
    @Id
    val id: UUID = UUID.randomUUID(),
    val experienceId: UUID,
    val title: String,
    val description: String,
    val problem: String,
    val solution: String,
    val impact: String,
    val technologies: List<String> = emptyList(),
    val displayOrder: Int = 0
)