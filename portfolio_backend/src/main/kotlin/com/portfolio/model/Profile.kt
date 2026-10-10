package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document(collection = "profiles")
data class Profile(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String,
    val title: String,
    val tagline: String,
    val summary: String,
    val location: String,
    val email: String,
    val resumeUrl: String? = null,
    val socialLinks: List<String> = emptyList()
)