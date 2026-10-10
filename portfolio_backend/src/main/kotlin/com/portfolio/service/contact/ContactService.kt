package com.portfolio.service.contact

import com.portfolio.dto.request.ContactMessageRequest
import com.portfolio.dto.response.ContactMessageResponse
import com.portfolio.model.ContactMessage
import com.portfolio.repository.ContactMessageRepository
import org.springframework.stereotype.Service

@Service
class ContactService(
    private val contactMessageRepository: ContactMessageRepository
) {

    fun createContactMessage(
        request: ContactMessageRequest
    ): ContactMessageResponse {

        val contactMessage = ContactMessage(
            name = request.name,
            email = request.email,
            message = request.message
        )

        val savedMessage = contactMessageRepository.save(contactMessage)

        return ContactMessageResponse.from(savedMessage)
    }
}