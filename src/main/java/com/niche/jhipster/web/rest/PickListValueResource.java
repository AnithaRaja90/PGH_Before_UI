package com.niche.jhipster.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.niche.jhipster.service.PickListValueService;
import com.niche.jhipster.web.rest.errors.BadRequestAlertException;
import com.niche.jhipster.web.rest.util.HeaderUtil;
import com.niche.jhipster.web.rest.util.PaginationUtil;
import com.niche.jhipster.service.dto.PickListValueDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing PickListValue.
 */
@RestController
@RequestMapping("/api")
public class PickListValueResource {

    private final Logger log = LoggerFactory.getLogger(PickListValueResource.class);

    private static final String ENTITY_NAME = "pickListValue";

    private final PickListValueService pickListValueService;

    public PickListValueResource(PickListValueService pickListValueService) {
        this.pickListValueService = pickListValueService;
    }

    /**
     * POST  /pick-list-values : Create a new pickListValue.
     *
     * @param pickListValueDTO the pickListValueDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new pickListValueDTO, or with status 400 (Bad Request) if the pickListValue has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/pick-list-values")
    @Timed
    public ResponseEntity<PickListValueDTO> createPickListValue(@Valid @RequestBody PickListValueDTO pickListValueDTO) throws URISyntaxException {
        log.debug("REST request to save PickListValue : {}", pickListValueDTO);
        if (pickListValueDTO.getId() != null) {
            throw new BadRequestAlertException("A new pickListValue cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PickListValueDTO result = pickListValueService.save(pickListValueDTO);
        return ResponseEntity.created(new URI("/api/pick-list-values/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /pick-list-values : Updates an existing pickListValue.
     *
     * @param pickListValueDTO the pickListValueDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated pickListValueDTO,
     * or with status 400 (Bad Request) if the pickListValueDTO is not valid,
     * or with status 500 (Internal Server Error) if the pickListValueDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/pick-list-values")
    @Timed
    public ResponseEntity<PickListValueDTO> updatePickListValue(@Valid @RequestBody PickListValueDTO pickListValueDTO) throws URISyntaxException {
        log.debug("REST request to update PickListValue : {}", pickListValueDTO);
        if (pickListValueDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PickListValueDTO result = pickListValueService.save(pickListValueDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, pickListValueDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /pick-list-values : get all the pickListValues.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of pickListValues in body
     */
    @GetMapping("/pick-list-values")
    @Timed
    public ResponseEntity<List<PickListValueDTO>> getAllPickListValues(Pageable pageable) {
        log.debug("REST request to get a page of PickListValues");
        Page<PickListValueDTO> page = pickListValueService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/pick-list-values");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /pick-list-values/:id : get the "id" pickListValue.
     *
     * @param id the id of the pickListValueDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the pickListValueDTO, or with status 404 (Not Found)
     */
    @GetMapping("/pick-list-values/{id}")
    @Timed
    public ResponseEntity<PickListValueDTO> getPickListValue(@PathVariable Long id) {
        log.debug("REST request to get PickListValue : {}", id);
        Optional<PickListValueDTO> pickListValueDTO = pickListValueService.findOne(id);
        return ResponseUtil.wrapOrNotFound(pickListValueDTO);
    }

    /**
     * DELETE  /pick-list-values/:id : delete the "id" pickListValue.
     *
     * @param id the id of the pickListValueDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/pick-list-values/{id}")
    @Timed
    public ResponseEntity<Void> deletePickListValue(@PathVariable Long id) {
        log.debug("REST request to delete PickListValue : {}", id);
        pickListValueService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
