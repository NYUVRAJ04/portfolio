package com.portfolio.service.career

import com.portfolio.dto.response.ExperienceResponse
import com.portfolio.dto.response.MissionResponse
import com.portfolio.exception.ResourceNotFoundException
import com.portfolio.repository.ExperienceRepository
import com.portfolio.repository.MissionRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class CareerService(
    private val experienceRepository: ExperienceRepository,
    private val missionRepository: MissionRepository
) {

    fun getCareer(): List<ExperienceResponse> {
        return experienceRepository
            .findAllByOrderByDisplayOrderAsc()
            .map { ExperienceResponse.from(it) }
    }

    fun getExperience(id: UUID): ExperienceResponse {
        val experience = experienceRepository.findById(id)
            .orElseThrow {
                ResourceNotFoundException("Experience not found with id: $id")
            }

        return ExperienceResponse.from(experience)
    }

    fun getMissions(experienceId: UUID): List<MissionResponse> {

        if (!experienceRepository.existsById(experienceId)) {
            throw ResourceNotFoundException("Experience not found with id: $experienceId")
        }

        return missionRepository
            .findAllByExperienceIdOrderByDisplayOrderAsc(experienceId)
            .map { MissionResponse.from(it) }
    }
}