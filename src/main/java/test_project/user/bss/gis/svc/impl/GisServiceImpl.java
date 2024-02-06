package test_project.user.bss.gis.svc.impl;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import test_project.user.bss.gis.dao.GisDao;
import test_project.user.bss.gis.svc.GisService;

@Service(value = "gisService")
public class GisServiceImpl implements GisService {
	@Resource(name = "gisDAO")
	private GisDao gisDao;
	
	@Override
	public List<HashMap<String, Object>> testConnetcion() {
		return gisDao.selectList("gis.getTestGis");
	}

	@Override
	public String getNow() {
		return gisDao.selectOne("gis.getNow");
	}
	
	
}
