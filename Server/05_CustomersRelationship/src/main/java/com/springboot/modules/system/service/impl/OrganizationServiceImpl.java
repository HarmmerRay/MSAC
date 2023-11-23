package com.springboot.modules.system.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.springboot.modules.system.dto.TreeDto;
import com.springboot.modules.system.entity.Organization;
import com.springboot.modules.system.mapper.OrganizationMapper;
import com.springboot.modules.system.service.OrganizationService;
import com.springboot.utils.Constants;

import tk.mybatis.mapper.weekend.Weekend;
import tk.mybatis.mapper.weekend.WeekendCriteria;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrganizationServiceImpl implements OrganizationService {

    @Autowired
    private OrganizationMapper organizationMapper;

    @Override
    @Transactional
    public void createOrganization(Organization organization) {
        Organization parent = findOne(organization.getParentId());
        organization.setParentIds(parent.makeSelfAsParentIds());
        organization.setAvailable(true);
        organizationMapper.insertSelective(organization);
    }

    @Override
    @Transactional
    public void updateOrganization(Organization organization) {
        organizationMapper.updateByPrimaryKeySelective(organization);
    }

    @Override
    @Transactional
    public void deleteOrganization(Long organizationId) {
        organizationMapper.deleteByPrimaryKey(organizationId);
    }

    @Override
    public Organization findOne(Long organizationId) {
        return organizationMapper.selectByPrimaryKey(organizationId);
    }

    @Override
    public List<Organization> findAll() {
        return organizationMapper.selectAll();
    }

    @Override
    public List<Organization> find(Weekend example) {
        return organizationMapper.selectByExample(example);
    }

    @Override
    public List<TreeDto> findOrgTree(Long pId) {
        if (StringUtils.isEmpty(pId)) {
            pId = Constants.ORG_ROOT_ID;
        }
        List<TreeDto> tds = new ArrayList<>();
        Weekend<Organization> example = Weekend.of(Organization.class);
        WeekendCriteria<Organization, Object> criteria = example.weekendCriteria();
        criteria.andEqualTo(Organization::getParentId, pId);
        organizationMapper.selectByExample(example).forEach(o -> tds.add(new TreeDto(o.getId(), o.getParentId(), o.getName(), Boolean.FALSE.equals(o.getLeaf()), o)));
        return tds;
    }

    @Override
    public List<Organization> findAllWithExclude(Organization exclude) {
        Weekend<Organization> weekend = Weekend.of(Organization.class);
        WeekendCriteria<Organization, Object> criteria = weekend.weekendCriteria();
        criteria.andNotEqualTo(Organization::getId, exclude.getId()).andNotLike(Organization::getParentIds, exclude.makeSelfAsParentIds() + "%");
        return organizationMapper.selectByExample(weekend);
    }

    @Override
    @Transactional
    public void move(Organization source, Organization target) {
        organizationMapper.updateByPrimaryKeySelective(target);
        organizationMapper.updateSalefParentIds(source.makeSelfAsParentIds());
    }
}
