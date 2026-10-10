package com.portfolio.repository

import com.portfolio.model.ContactMessage
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ContactMessageRepository : MongoRepository<ContactMessage, UUID> {

    fun findAllByOrderByCreatedAtDesc(): List<ContactMessage>
}