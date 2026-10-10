package com.portfolio.controller.contact

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.request.ContactMessageRequest
import com.portfolio.dto.response.ContactMessageResponse
import com.portfolio.service.contact.ContactService
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.ResponseStatus

@RestController
@RequestMapping(ApiPaths.CONTACTS)
class ContactController(
    private val contactService: ContactService
) {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun createContactMessage(
        @Valid @RequestBody request: ContactMessageRequest
    ): ContactMessageResponse {
        return contactService.createContactMessage(request)
    }
}
