package com.portfolio.dto.response

import com.portfolio.model.ContactMessage
import java.time.Instant
import java.util.UUID

data class ContactMessageResponse(
    val id: UUID,
    val name: String,
    val createdAt: Instant,
    val status: String
) {
    companion object {

        fun from(
            contactMessage: ContactMessage
        ): ContactMessageResponse {
            return ContactMessageResponse(
                id = contactMessage.id,
                name = contactMessage.name,
                createdAt = contactMessage.createdAt,
                status = contactMessage.status
            )
        }
    }
}