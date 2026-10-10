package com.portfolio.exception

import com.portfolio.utils.ErrorResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import java.time.Instant

@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException::class)
    fun handleResourceNotFound(
        exception: ResourceNotFoundException
    ): ResponseEntity<ErrorResponse> {

        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(
                ErrorResponse(
                    timestamp = Instant.now(),
                    status = 404,
                    error = "NOT_FOUND",
                    message = exception.message ?: "Resource not found"
                )
            )
    }

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidation(
        exception: MethodArgumentNotValidException
    ): ResponseEntity<ErrorResponse> {

        val message = exception.bindingResult
            .fieldErrors
            .joinToString(", ") {
                "${it.field}: ${it.defaultMessage}"
            }

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(
                ErrorResponse(
                    timestamp = Instant.now(),
                    status = 400,
                    error = "VALIDATION_ERROR",
                    message = message
                )
            )
    }

    @ExceptionHandler(Exception::class)
    fun handleGenericException(
        exception: Exception
    ): ResponseEntity<ErrorResponse> {

        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(
                ErrorResponse(
                    timestamp = Instant.now(),
                    status = 500,
                    error = "INTERNAL_SERVER_ERROR",
                    message = "An unexpected error occurred"
                )
            )
    }
}