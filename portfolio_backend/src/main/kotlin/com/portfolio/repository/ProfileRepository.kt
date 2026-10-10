package com.portfolio.repository

import com.portfolio.model.Profile
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface ProfileRepository : MongoRepository<Profile, UUID>
{
    fun findFirstByOrderByIdAsc(): Profile?
}