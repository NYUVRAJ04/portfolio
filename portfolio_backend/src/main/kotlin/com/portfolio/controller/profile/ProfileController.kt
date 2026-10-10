package com.portfolio.controller.profile

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.ProfileResponse
import com.portfolio.service.profile.ProfileService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(ApiPaths.PROFILE)
class ProfileController(
    private val profileService: ProfileService
) {

    @GetMapping
    fun getProfile(): ProfileResponse {
        return profileService.getProfile()
    }
}
