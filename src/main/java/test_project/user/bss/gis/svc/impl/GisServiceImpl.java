package test_project.user.bss.gis.svc.impl;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import test_project.user.bss.gis.dao.GisDao;
import test_project.user.bss.gis.svc.GisService;

@Service(value = "gisService")
public class GisServiceImpl implements GisService {
	private final Logger logger = LogManager.getLogger(GisServiceImpl.class);
	
	@Resource(name = "gisDAO")
	private GisDao gisDao;
	
	@Override
	public List<HashMap<String, Object>> testConnetcion() {
		return gisDao.selectList("gis.getTestGis");
	}
	
	
}
