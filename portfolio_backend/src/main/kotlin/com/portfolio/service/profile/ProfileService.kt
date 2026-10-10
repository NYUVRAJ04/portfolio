package com.portfolio.service.profile

import com.portfolio.dto.response.ProfileResponse
import com.portfolio.repository.ProfileRepository
import com.portfolio.exception.ProfileNotFoundException
import org.springframework.stereotype.Service

@Service
class ProfileService(
    private val profileRepository: ProfileRepository
) {

    fun getProfile(): ProfileResponse {
        val profile = profileRepository.findAll()
            .firstOrNull()
            ?: throw ProfileNotFoundException()

        return ProfileResponse.from(profile)
    }
}