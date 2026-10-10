package com.portfolio.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Instant
import java.util.UUID

@Document(collection = "contact_messages")
data class ContactMessage(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String,
    val email: String,
    val message: String,
    val createdAt: Instant = Instant.now(),
    val status: String = "NEW"
)