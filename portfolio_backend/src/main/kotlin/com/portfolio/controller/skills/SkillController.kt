package com.portfolio.controller.skills

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.SkillResponse
import com.portfolio.service.skills.SkillService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(ApiPaths.SKILLS)
class SkillController(
    private val skillService: SkillService
) {

    @GetMapping
    fun getSkills(): List<SkillResponse> {
        return skillService.getSkills()
    }

    @GetMapping("/{category}")
    fun getSkillsByCategory(
        @PathVariable category: String
    ): List<SkillResponse> {
        return skillService.getSkillsByCategory(category)
    }
}
