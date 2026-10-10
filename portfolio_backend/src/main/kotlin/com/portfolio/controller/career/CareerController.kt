package com.portfolio.controller.career

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.ExperienceResponse
import com.portfolio.dto.response.MissionResponse
import com.portfolio.service.career.CareerService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping(ApiPaths.CAREER)
class CareerController(
    private val careerService: CareerService
) {

    @GetMapping
    fun getCareer(): List<ExperienceResponse> {
        return careerService.getCareer()
    }

    @GetMapping("/{id}")
    fun getExperience(
        @PathVariable id: UUID
    ): ExperienceResponse {
        return careerService.getExperience(id)
    }

    @GetMapping("/{id}/missions")
    fun getMissions(
        @PathVariable id: UUID
    ): List<MissionResponse> {
        return careerService.getMissions(id)
    }
}
