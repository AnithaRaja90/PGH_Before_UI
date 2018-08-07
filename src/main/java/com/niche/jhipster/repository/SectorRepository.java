package com.niche.jhipster.repository;

import com.niche.jhipster.domain.Sector;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import com.niche.jhipster.service.dto.SectorDTO;

import java.util.List;

/**
 * Spring Data  repository for the Sector entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {

    /* public static final String FIND_SECTOR = "SELECT s.id, s.sectorName FROM sector s where s.zonal_id = (:zId)";

    @Query(value = FIND_SECTOR, nativeQuery = true)
    public List<Object[]> findSectors(@Param("zId") Long zId);
    */

    /* @Query(value = "SELECT * FROM sector where zonal_id = ?1", nativeQuery = true)
    public List<Object[]> findSectors(Long zId); */

    // Op<Sector> findByZonal(Long zonal);

}
