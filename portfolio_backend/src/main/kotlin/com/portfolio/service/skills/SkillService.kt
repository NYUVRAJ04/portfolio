package com.portfolio.service.skills

import com.portfolio.dto.response.SkillResponse
import com.portfolio.repository.SkillRepository
import org.springframework.stereotype.Service

@Service
class SkillService(
    private val skillRepository: SkillRepository
) {

    fun getSkills(): List<SkillResponse> {
        return skillRepository
            .findAllByOrderByDisplayOrderAsc()
            .map { SkillResponse.from(it) }
    }

    fun getSkillsByCategory(
        category: String
    ): List<SkillResponse> {

        return skillRepository
            .findAllByCategoryOrderByDisplayOrderAsc(category)
            .map { SkillResponse.from(it) }
    }
}