package com.portfolio.service.education

import com.portfolio.dto.response.EducationResponse
import com.portfolio.repository.EducationRepository
import org.springframework.stereotype.Service

@Service
class EducationService(
    private val educationRepository: EducationRepository
) {

    fun getEducation(): List<EducationResponse> {
        return educationRepository
            .findAllByOrderByDisplayOrderAsc()
            .map { EducationResponse.from(it) }
    }
}