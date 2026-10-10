package com.portfolio.controller.education

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.EducationResponse
import com.portfolio.service.education.EducationService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(ApiPaths.EDUCATION)
class EducationController(
    private val educationService: EducationService
) {

    @GetMapping
    fun getEducation(): List<EducationResponse> {
        return educationService.getEducation()
    }
}
