package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document(collection = "projects")
data class Project(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String,
    val raceName: String,
    val category: String,
    val description: String,
    val problem: String,
    val solution: String,
    val features: List<String> = emptyList(),
    val technologies: List<String> = emptyList(),
    val architecture: List<String> = emptyList(),
    val challenges: List<String> = emptyList(),
    val outcomes: List<String> = emptyList(),
    val githubUrl: String? = null,
    val demoUrl: String? = null,
    val imageUrl: String? = null,
    val status: String = "COMPLETED",
    val displayOrder: Int = 0
)