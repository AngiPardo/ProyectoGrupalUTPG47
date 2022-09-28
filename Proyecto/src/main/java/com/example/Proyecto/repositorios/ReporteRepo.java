package com.example.Proyecto.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Proyecto.modelos.Reporte;

@Repository
public interface ReporteRepo extends JpaRepository<Reporte, String> {

    Optional<Reporte> findByIdreporte(Long idreporte);
    void deleteByIdreporte(Long idreporte);
    Reporte getReferenceByIdreporte(Long idreporte);
    
}
