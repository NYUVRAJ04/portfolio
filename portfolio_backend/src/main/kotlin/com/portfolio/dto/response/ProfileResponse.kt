package com.portfolio.dto.response

import com.portfolio.model.Profile
import java.util.UUID

data class ProfileResponse(
    val id: UUID,
    val name: String,
    val title: String,
    val tagline: String,
    val summary: String,
    val location: String,
    val email: String,
    val resumeUrl: String?,
    val socialLinks: List<String>
) {
    companion object {

        fun from(profile: Profile): ProfileResponse {
            return ProfileResponse(
                id = profile.id,
                name = profile.name,
                title = profile.title,
                tagline = profile.tagline,
                summary = profile.summary,
                location = profile.location,
                email = profile.email,
                resumeUrl = profile.resumeUrl,
                socialLinks = profile.socialLinks
            )
        }
    }
}